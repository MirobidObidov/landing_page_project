import Image from 'next/image';
import user1 from '../public/user_1.jpg'
import user2 from '../public/user_2.jpg'
import user3 from '../public/user_3.jpg'

const Testimonial = () => {
    const testimonials = [
      {
        name: "John Doe",
        title: "CEO at Company",
        Image: {user1}, 
        quote: "This service is fantastic! It has completely transformed the way we work."
      },
      {
        name: "Jane Smith",
        title: "CTO at Another Company",
        image: {user2},
        quote: "A truly wonderful experience! The team is amazing and the product is top-notch."
      },
      {
        name: "Chris Johnson",
        title: "Product Manager at TechCorp",
        image: {user3},
        quote: "Absolutely stellar. I can’t imagine going back to our old workflow."
      }
    ];
  
    return (
      <section className="bg-light-blue py-16 px-[5%]">
        <h2 className="text-4xl font-bold text-center text-dark-blue mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image src={user2} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-dark-blue">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  