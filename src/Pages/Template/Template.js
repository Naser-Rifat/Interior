function Template({ children, ...attrs }) {
  return <template {...attrs} dangerouslySetInnerHTML={{ __html: children }} />;
}

export default Template;
