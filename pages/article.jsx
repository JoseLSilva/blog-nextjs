import { Layout, Container } from "../components";

export default function Article() {
  const handleSocialMedia = social => {
    const uri = window.location.href;
    switch (social) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${uri}`,
          "pop",
          "width=568,height=468,scrollbars=no"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${uri}`,
          "pop",
          "width=568,height=468,scrollbars=no"
        );
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${uri}`, "_blank");
        break;
      default:
        break;
    }
  };
  return (
    <Layout>
      <Container>
        <div className="flex-grow">
          <div className="post-header">
            <h1 className="text-4xl">Article</h1>
            <p className="mb-3 text-sm text-gray-700">
              Posted on February 6, 2020 by{" "}
              <a href="#" className="text-orange-700 font-medium">
                Author
              </a>
            </p>
            <hr />
            <div className="flex items-center">
              <div className="w-1/4 md:w-1/12 mr-5">
                <div className="text-center my-3">
                  <div className="text-lg font-extrabold">400</div>
                  <div className="text-sm text-gray-700">Shares</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="p-3 mx-1 text-white font-medium bg-blue-800 rounded-md"
                  onClick={() => handleSocialMedia("facebook")}
                >
                  Facebook
                </button>
                <button
                  className="p-3 mx-1 text-white font-medium bg-blue-500 rounded-md"
                  onClick={() => handleSocialMedia("twitter")}
                >
                  Twitter
                </button>
                <button
                  className="p-3 mx-1 text-white font-medium bg-green-700 rounded-md"
                  onClick={() => handleSocialMedia("whatsapp")}
                >
                  Whatsapp
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
