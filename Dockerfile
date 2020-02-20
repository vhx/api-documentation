FROM ruby:2.1.5

RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN gem install bundler -v "< 2"

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . ./

EXPOSE 4567

CMD ["bundle", "exec", "middleman", "server"]
