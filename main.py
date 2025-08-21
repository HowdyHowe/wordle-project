import json

# Load JSON files
with open("public/data/indonesia-words.json", "r", encoding="utf-8") as f1:
    data1 = json.load(f1)

with open("public/data/word-idn.json", "r", encoding="utf-8") as f2:
    data2 = json.load(f2)

# Merge function
def merge_json(d1, d2):
    result = d1.copy()
    for key, value in d2.items():
        if key in result:
            # merge and remove duplicates
            result[key] = list(set(result[key] + value))
        else:
            result[key] = value
    return result

merged = merge_json(data1, data2)

# Save result to new file
with open("merged.json", "w", encoding="utf-8") as f:
    json.dump(merged, f, ensure_ascii=False, indent=4)

print("Merged JSON saved to merged.json")