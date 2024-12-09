import os

def test_page_exists():
    assert os.path.exists("index.html"), "El archivo index.html no existe"
