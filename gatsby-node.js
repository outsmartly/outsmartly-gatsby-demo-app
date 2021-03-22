exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/',
    toPath: '/nope',
    conditions: '{ Role = ["cdn"] }',
  });
};
