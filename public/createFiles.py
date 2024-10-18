import os
import json

# if os.getcwd().split('\\')[-1] == "public":
#     os.chdir("../")

# os.chdir("app")


if os.path.exists("public"):
    os.chdir("public")

if not os.path.exists("files"):
    os.makedirs("files")

with open("data.json", "rb") as f:
    data = json.load(f)


for name, content in data.items():
    with open(f"files/{name}.gitignore", "w") as f:
        f.write(content.strip())

    print(f"{name}.gitignore created\r", end="")

print("All .gitignore files created")
