FROM ubuntu:18.04

RUN apt update
RUN apt install -y git-core curl
RUN apt install -y autoconf bison patch build-essential rustc libssl1.0-dev libyaml-dev libreadline6-dev zlib1g-dev libgmp-dev libncurses5-dev libffi-dev libgdbm5 libgdbm-dev libdb-dev uuid-dev

# Install ruby-build
WORKDIR /tmp/ruby-build
RUN git clone https://github.com/rbenv/ruby-build.git .

RUN ./install.sh

# Install Ruby 2.1.5
RUN ruby-build 2.1.5 /usr/local

RUN apt install -y nodejs

RUN apt clean

WORKDIR /app

RUN gem install bundler -v "< 2"

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . ./

EXPOSE 4567

CMD ["bundle", "exec", "middleman", "server"]
