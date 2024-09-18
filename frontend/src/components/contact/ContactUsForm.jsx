const ContactUsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex-center py-5 w-full h-[500px]">
      <form className="w-[450px] h-96" onSubmit={handleSubmit}>
        <div className="mb-6 drop-shadow-sm">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            required
            className="w-full border rounded-md h-10 px-4 outline-offset-1 outline-blue-300"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="w-full border rounded-md h-10 px-4 outline-offset-1 outline-blue-300"
          />
        </div>
        <div className="mb-5">
          <textarea
            name="message"
            required
            placeholder="Enter your message here"
            className="w-full resize-none border rounded-md py-2 h-32 px-4 outline-offset-1 outline-blue-300"
          ></textarea>
        </div>
        <div>
          <button className="px-8 text-white font-semibold py-[6px] bg-violet-500 rounded-md transition-all hover:bg-violet-600">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
