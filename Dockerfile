FROM ubuntu:trusty

RUN apt-get update
RUN apt-get install -y \
    build-essential \
    git \
    ruby \
    ruby-dev

WORKDIR /app

RUN gem install bundler -v "< 2"

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . ./

EXPOSE 4567

CMD ["bundle", "exec", "middleman", "server"]
