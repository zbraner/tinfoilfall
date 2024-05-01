import random
max_line_char_count = 60;
min_line_char_count = 40;

f = open("encyclopedia_vol1_clean.txt", "r")
g = open("passages_clean.txt", "r")

passages = f.read()
personal_passages = g.read()

passages_len = len(passages)
personal_passages_len = len(personal_passages)

for x in range(14):
    fragment  = "nothing yet"

    while fragment == "nothing yet":
        '''
        selected_passage = random.int(passages) if (x%2 == 0) else random.choice(personal_passages)


        passage_length = len(selected_passage)

        if(passage_length > max_line_char_count):
            char_count = random.randint(min_line_char_count, max_line_char_count)
            string_starting_point = random.randint(0, passage_length - max_line_char_count)
            random_string = selected_passage[string_starting_point:(string_starting_point+char_count)]
            if not(random_string.isspace()):
                y = random_string
        '''


        if x%2 == 0:
            random_starting_point = random.randint(0, passages_len-max_line_char_count)
            random_len = random.randint(min_line_char_count, max_line_char_count)
            fragment = passages[random_starting_point:random_starting_point+random_len]
        else:
            random_starting_point = random.randint(0, personal_passages_len-max_line_char_count)
            random_len = random.randint(min_line_char_count, max_line_char_count)
            fragment = personal_passages[random_starting_point:random_starting_point+random_len]


    print(fragment)

f.close()
g.close()
