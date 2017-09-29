import os
import environ

env = environ.Env()

env.read_env('.env')

DEBUG = env('DEBUG', default=False)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

WEBPACK_LOADER = {
    'DEFAULT': {
        'CACHE': not DEBUG,
        'BUNDLE_DIR_NAME': 'js/', # must end with slash
        'STATS_FILE': os.path.join(BASE_DIR, 'client/hot/webpack-stats.json'),
        'POLL_INTERVAL': 0.1,
        'TIMEOUT': None,
        'IGNORE': ['.+\.hot-update.js', '.+\.map']
    }
}
