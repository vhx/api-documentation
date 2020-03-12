FROM ubuntu:trusty

RUN apt-get update
RUN apt-get install -yq ruby ruby-dev build-essential git

WORKDIR /app

RUN gem install bundler -v "< 2"

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install

COPY . ./

EXPOSE 4567

CMD ["bundle", "exec", "middleman", "server"]
