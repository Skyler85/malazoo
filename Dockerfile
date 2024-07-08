# Dockerfile

# 베이스 이미지로 python 사용
FROM python:3.9-slim

# 작업 디렉토리 설정
WORKDIR /app

# 필요 패키지 복사 및 설치
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# 앱 소스 복사
COPY . .

# 장고 서버 실행
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
