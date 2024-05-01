#same as selector but doesn't break up words

import random
max_line_char_count = 60;
min_line_char_count = 40;

max_words = 10
min_words = 5

line_char_count_est = max_words*15

f = open("encyclopedia_vol1_clean.txt", "r")
g = open("passages_clean.txt", "r")

passages = f.read()
personal_passages = g.read()

passages_len = len(passages)
personal_passages_len = len(personal_passages)

for x in range(14):
    phrase  = "nothing yet"

    while phrase == "nothing yet":
        '''
        random starting point
        fragment(big length, enough for max_words*long_word_length)
        break up by spaces
        pick first random_word_length words
        return a string of the words separated by spaces

        '''




        if x%2 == 0:
            random_start = random.randint(0, passages_len-line_char_count_est)
            fragment = passages[random_start:random_start+line_char_count_est]
            fragment_words = fragment[fragment.find(' '):].split()
            word_count = random.randint(min_words, max_words)
            words = fragment_words[:word_count]
            phrase = " ".join(words)
        else:
            random_start = random.randint(0, personal_passages_len-line_char_count_est)
            fragment = personal_passages[random_start:random_start+line_char_count_est]
            fragment_words = fragment[fragment.find(' '):].split()
            word_count = random.randint(min_words, max_words)
            words = fragment_words[:word_count]
            phrase = " ".join(words)



    print(phrase)

f.close()
g.close()
