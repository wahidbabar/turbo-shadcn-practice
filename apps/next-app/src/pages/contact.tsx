import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";

export default function Contact() {
  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <Input
            id="name"
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <Textarea
            id="message"
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Your message"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
