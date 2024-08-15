from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import threading
import uvicorn
import requests
import streamlit as st
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.llms import Ollama

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    query: str

@app.post("/api/query")
def get_response(query: Query):
    prompt_template = ChatPromptTemplate(
        messages=[
            ("system", "You are a helpful AI assistant. Your name is fitness dude."),
            ("user", f"user query: {query.query}")
        ]
    )
    llm = Ollama(model="llama2")
    output_parser = StrOutputParser()
    chain = prompt_template | llm | output_parser

    formatted_messages = prompt_template.format_messages(query=query.query)
    response = chain.invoke({"query": query.query})
    return {"response": response}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


st.title("FitBuddy")
input_txt = st.text_input("Please enter your queries here..")

if input_txt:
    response = get_response(Query(query=input_txt))
    st.write(response["response"])
