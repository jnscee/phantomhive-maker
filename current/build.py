"""Assemble the current static game using its sources and the repository's shared asset archives."""
import argparse
import hashlib
import json
import re
from pathlib import Path
import shutil
import zipfile


def build(output):
    source = Path(__file__).resolve().parent
    root = source.parent
    if output.exists() and (not output.is_dir() or any(output.iterdir())):
        raise SystemExit(f"Choose a new or empty output folder: {output}")
    output.mkdir(parents=True, exist_ok=True)
    needed = json.loads((source / "shared-assets.json").read_text(encoding="utf-8"))
    for archive in sorted(root.glob("game-part-*.zip")):
        with zipfile.ZipFile(archive) as bundle:
            for name in sorted(needed.keys() & set(bundle.namelist())):
                data = bundle.read(name)
                if hashlib.sha256(data).hexdigest() != needed[name]:
                    continue
                target = output / name
                target.parent.mkdir(exist_ok=True, parents=True)
                target.write_bytes(data)
                del needed[name]
    if needed:
        raise SystemExit("Missing original assets: " + ", ".join(needed))
    with zipfile.ZipFile(source / "images.zip") as images:
        for name in images.namelist():
            path = Path(name)
            if path.is_absolute() or ".." in path.parts or path.parts[0] != "assets":
                raise SystemExit(f"Invalid image path: {name}")
            target = output / path
            target.parent.mkdir(exist_ok=True, parents=True)
            target.write_bytes(images.read(name))
    # Individual media files from the editor override the archived originals.
    for asset in (source / "assets").rglob("*"):
        if asset.is_file():
            target = output / asset.relative_to(source)
            target.parent.mkdir(exist_ok=True, parents=True)
            shutil.copyfile(asset, target)
    for extension in ("js", "css"):
        folder = output / extension
        folder.mkdir(exist_ok=True)
        for path in source.glob(f"*.{extension}"):
            shutil.copyfile(path, folder / path.name)
    html = (source / "index.html").read_text(encoding="utf-8")
    # Rebuilding game files must also invalidate URLs stored by browsers.
    def version_script(match):
        path = match[1]
        digest = hashlib.sha256((output / path).read_bytes()).hexdigest()[:12]
        return f'src="{path}?v={digest}"'

    html = re.sub(r'src="(js/[\w-]+\.js)(?:\?v=[^"]+)?"', version_script, html)
    (output / "index.html").write_text(html, encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="New or empty folder for the playable game")
    build(parser.parse_args().output.resolve())
