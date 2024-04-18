from fastapi import FastAPI

app = FastAPI()

@app.get("/backend/python")
def hello_world():
    return {"message": "Hello World"}