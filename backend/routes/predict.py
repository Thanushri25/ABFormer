from fastapi import APIRouter
from pydantic import BaseModel  #pydantic is used for input validation. It ensures that incoming prediction requests contain 
                                #the correct fields and data types."
from database import save_prediction
from inference import predict_single_sample

router = APIRouter()

class PredictionInput(BaseModel):
    heavy_chain: str
    light_chain: str
    antigen: str
    payload: str
    linker: str
    dar: float

@router.post("/predict")
def predict(data: PredictionInput):

    sample = {
        "Heavy_Chain_Sequence": data.heavy_chain,
        "Light_Chain_Sequence": data.light_chain,
        "Antigen_Sequence": data.antigen,
        "Payload_SMILES": data.payload,
        "Linker_SMILES": data.linker,
        "DAR": data.dar
    }

    result = predict_single_sample(sample)
    save_prediction(
    data.heavy_chain,
    data.antigen,
    result["score"],
    1 if result["activity"] == "Active" else 0
)
    return result