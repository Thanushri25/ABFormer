from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from routes.predict import router as predict_router
from routes.history import router as history_router
from routes.heatmap import router as heatmap_router
app = FastAPI()
app.mount("/static", StaticFiles(directory="."), name="static")
# StaticFiles is used to serve generated files such as heatmaps, PDFs, and images through URL endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   #allow every website
    allow_credentials=True, #allow cookies, tokens,authenticn etc
    allow_methods=["*"], #like get post etc
    allow_headers=["*"], #content type , authorization etc
)

@app.get("/")
def home():
    return {"message": "ABFormer Backend Running"}

app.include_router(predict_router) #all apis inside bcum active
app.include_router(history_router)
app.include_router(heatmap_router)


#creates applicns and connects all routes