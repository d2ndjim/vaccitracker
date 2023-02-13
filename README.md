# VACCITRACKER 

> Vaccitracker is an application that helps users track their children immunization schedule with ease, and get email reminders before the date. This repository hold the API for the vaccitracker project


# ABOUT VACCITRACKER

### Background

- There are an estimated 350,000 births around the world everyday. Even though we all come from different cultures and geographies there are some common threads during the birth of a child. It is usually a period of celebration of new life, but at the same time it's the beginning of a new responsibility, especially for the parents. From day one the child needs to begin taking the required immunisations to protect them from diseases and to ensure proper growth and development. The parents need to remember when and what vaccines need to be taken and also to ensure they attend their immunization appointments on schedule. This can be challenging especially for parents with busy schedules or first time parents. From the survey results linked in the appendix below more than 60% of parents said they have missed an immunization appointment and forgetting the date was the major reason. Most parents either rely on the hospital immunization card which can easily be misplaced or damaged, or they try to keep track with a diary. When parents forget their children’s immunization appointment more than 60% of them have negative feelings about themselves and feel like bad parents. Research has found that these negative feelings can have a further negative impact on the health of the child.

### User Stories

- As a parent I want to know in advance if my child has an upcoming immunization appointment so that I can plan and not forget.
- As a parent I want to know from time to time all the immunizations that my child has taken and if there is any outstanding one so I can have informed discussions with our doctor.
- As a parent I would like to have a general idea of what each immunization does and possible side effects, so if they do happen I will know what to do and expect.
- As a parent to more than one children I want to be able to keep track of all of my children’s immunization appointments without mixing them up




## Built With

- Ruby on Rails
- PostgreSQL
- Rspec
- JWT and Bcrypt for authentication
- Rubocop

To get a local copy up and running follow these simple example steps.

### Prerequisites

The basic requirements for building the executable are:

- Ruby 3.2.0
- Rails 7.0.4
- VSCode or any other equivalent code editor
- Postgres

# Getting Started

#### Cloning the project

```
git clone  <https://github.com/d2ndjim/vacci-test.git>
cd vacci-test
```

## Getting packages

```
bundle install
```

##### For database setup

```
go to config/database.yml
username: <Your postgres username>
password: <Your postgres username>
```

## To run project

```
rails db:create
rails db:migrate
rails server
```

##### To run tests
```
rspec spec
```

All source code files are licensed under the permissive zlib license
(http://opensource.org/licenses/Zlib) unless marked differently in a particular folder/file.

## Author
👤 **Lekan Jimoh**

- GitHub: [d2ndjim]https://github.com/d2ndjim)
- Twitter: [d2ndjim_](https://twitter.com/d2ndjim_)
- LinkedIn: [Lekan](https://linkedin.com/in/lekanj)
