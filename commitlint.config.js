const config = {
    extends: [
        '@commitlint/config-conventional',
    ],
    rules: {
        'type-enum': [2, 'always', [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
        ]],
        'body-max-line-length': [1, 'always', 80],
        'subject-case': [0],
        'header-max-length': [1, 'always', 50],
        'body-empty': [1, 'never'],
        'has-jira-ticket': [2, 'always'],
        'has-jira-ticket-subject': [2, 'always'],
    },
    plugins: [
        {
            rules: {
                'has-jira-ticket': ({ subject }) => [
                    subject && subject.match(/^[A-Z]+-[0-9]+/),
                    'subject must start with a Jira ticket number',
                ],
                'has-jira-ticket-subject': ({ subject }) => [
                    subject && subject.match(/^[A-Z]+-[0-9]+\s.+/),
                    'subject must be included after the Jira ticket number',
                ],
            },
        },
    ],
};

export default config;
