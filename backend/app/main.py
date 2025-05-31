from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app.utils import update_component_code

app = FastAPI()

origins = [
    "http://localhost:3000",  # your frontend origin
    # You can add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Or ["*"] to  allow all origins (not recommended for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc)
    allow_headers=["*"],  # Allow all headers
)
 

class UpdateRequest(BaseModel):
    code: str
    instruction: str

@app.post("/api/update")
async def update_code(data: UpdateRequest):
    try:
        updated_code = update_component_code(data.code, data.instruction)
        return {"updated_code": updated_code}
    except Exception as e:
        print(f"Error in update_code: {e}")
        return {"error": str(e)}
