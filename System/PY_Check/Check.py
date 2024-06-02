import json
import io


with io.open('Public/data/info.json', "r") as data :
    info = json.loads(data)
    
if info["name"] != "" and \
    info["email"] != "" and \
        info[""] != "" :
            ""