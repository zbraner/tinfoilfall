#removes \r and \n from .txt files

f = open("wonderx.txt", "r")
full_text = f.read()
full_text_without_newline = full_text.replace('\n', ' ')
full_text_without_return = full_text_without_newline.replace('\r', ' ')
f.close()

new_file = open("wonders_clean.txt", "w")
new_file.write(full_text_without_return)
new_file.close()
