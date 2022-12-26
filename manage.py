import sys

from api import create_api


def main():
    api, db = create_api()

    if sys.argv[1] == "migrate":
        db.create_all()
        exit()

    if sys.argv[1] == "run":
        api.app.run(host="0.0.0.0", port="5050", debug=True)


if __name__ == '__main__':
    main()
