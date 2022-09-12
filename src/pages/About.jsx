import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800
     to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex-col
       justify-center w-full h-full "
      >
        <div className="pb-8 mt-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum fuga a
          consequuntur. Quos ex inventore nemo temporibus nesciunt labore
          dignissimos consequatur ipsum atque voluptate laboriosam, consectetur
          reprehenderit libero! Eos numquam deserunt corporis tempore enim
          ducimus debitis reiciendis harum, commodi officiis mollitia unde id
          dolore nostrum eius, necessitatibus impedit iusto odio.
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem ratione veniam debitis autem repellat vel, aliquam
          eveniet tempore iusto cumque obcaecati distinctio velit provident ab
          excepturi, tenetur voluptatibus aut! Quasi quia quis assumenda modi,
          facere aliquam nostrum doloremque inventore quos eum ipsam non
          explicabo fuga iusto perferendis impedit consequatur temporibus?
        </p>
      </div>
    </div>
  );
};

export default About;
