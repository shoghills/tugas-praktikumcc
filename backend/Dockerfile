# Gunakan image Python yang ringan
FROM python:3.9-slim

# Set working directory di dalam container
WORKDIR /app

# Copy requirements dan install dependency
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy seluruh source code backend
COPY app.py .

# Expose port yang digunakan Flask
EXPOSE 5000

# Jalankan aplikasi
CMD ["python", "app.py"]