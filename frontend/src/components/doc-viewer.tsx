import DocViewer from "react-doc-viewer";

function DocViewerComponent() {
  const docs = [
    { uri: "https://url-to-my-pdf.pdf" },
    { uri: require("./example-files/pdf.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} />;
}

export default DocViewerComponent;
