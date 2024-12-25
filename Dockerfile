FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    g++ \
    python3 \
    python3-pip \
    openjdk-11-jdk \
    curl \
    git \
    wget \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

RUN npm install -g ve-compiler-2.0

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["node", "core.js"]
