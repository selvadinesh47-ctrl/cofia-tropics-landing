const Index = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Content will be loaded from index.html -->
        <script>
          window.location.href = '/index.html';
        </script>
      `
    }} />
  );
};

export default Index;