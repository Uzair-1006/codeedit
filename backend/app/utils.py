import re

def update_component_code(code: str, instruction: str) -> str:
    instruction = instruction.lower()

    # Handle "change button color to <color>"
    color_match = re.search(r"button color to (\w+)", instruction)
    if color_match:
        color = color_match.group(1)
        code = re.sub(r"color:\s*['\"]\w+['\"]", f"color: '{color}'", code)
        return code

    # Example: change background to <color>
    bg_match = re.search(r"background to (\w+)", instruction)
    if bg_match:
        bg_color = bg_match.group(1)
        code = re.sub(r"background:\s*['\"]\w+['\"]", f"background: '{bg_color}'", code)
        return code

    # Example: change button text to "Submit"
    text_match = re.search(r"change button text to ['\"](.*?)['\"]", instruction)
    if text_match:
        text = text_match.group(1)
        code = re.sub(r">\s*[^<]+<", f">{text}<", code)
        return code

    # If no known instruction matched:
    code += f"\n// Couldn't understand instruction: {instruction}"
    return code
