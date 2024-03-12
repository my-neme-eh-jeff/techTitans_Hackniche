from transformers import TapexTokenizer, BartForConditionalGeneration
import pandas as pd

table = pd.read_csv('./dataset/hotcoffee2.csv')

tokenizer = TapexTokenizer.from_pretrained("microsoft/tapex-large-finetuned-wtq")
model = BartForConditionalGeneration.from_pretrained("microsoft/tapex-large-finetuned-wtq")

# data = {
#     "year": [1896, 1900, 1904, 2004, 2008, 2012],
#     "city": ["athens", "paris", "st. louis", "athens", "beijing", "london"]
# }
# table = pd.DataFrame.from_dict(data)


# tapex accepts uncased input since it is pre-trained on the uncased corpus
query = "Which coffee has the highest price?"

encoding = tokenizer(table=table, query=query, return_tensors="pt")

# max_length = model.config.max_position_embeddings
# if encoding['input_ids'].shape[1] > max_length:
#     # Truncate the input to fit within the model's maximum sequence length
#     encoding['input_ids'] = encoding['input_ids'][:, :max_length]
#     encoding['attention_mask'] = encoding['attention_mask'][:, :max_length]

outputs = model.generate(**encoding)
result = tokenizer.batch_decode(outputs, skip_special_tokens=True)

# Use a pipeline as a high-level helper

# print("load pipeline")
# pipe = pipeline("table-question-answering", model="microsoft/tapex-large-finetuned-wtq")
# print("Retreiving result")
# result = pipe(table=table, query=query)['cells'][0]

def postProcessTAPEXResult(output):
    return str(output[0])

result = postProcessTAPEXResult(result)

print(result)
