import React from 'react';

const useDocumentTitle = (title) => {
  const [document_title, setDoucmentTitle] = React.useState(title);
  React.useEffect(() => {
    document.title = document_title;
  }, [document_title]);

  return [document_title, setDoucmentTitle];
};

export { useDocumentTitle };
