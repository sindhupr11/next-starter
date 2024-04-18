from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define your domain
allowed_domains = ["http://localhost:3000", "127.0.0.1:8000", "next-starter-swart.vercel.app"]  # Replace with your actual domain

# CORS middleware to allow only requests from the allowed domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_domains,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/backend/python")
def hello_world(request: Request):
    host = request.headers.get("host")
    print(request.headers)
    if host != allowed_domains:
        raise HTTPException(status_code=403, detail="Forbidden")
    return {"message": "Hello World"}