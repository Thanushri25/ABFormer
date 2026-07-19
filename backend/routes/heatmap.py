from fastapi import APIRouter
import glob
import os

router = APIRouter()
# @ is called decorator which creates get api end pt
@router.get("/heatmap")
def get_latest_heatmap():

    files = glob.glob("heatmap_*.png")

    if not files:
        return {
            "heatmap_url": None
        }

    latest_file = max(files, key=os.path.getctime)

    return {
        "heatmap_url": f"http://127.0.0.1:8000/static/{latest_file}"
    }