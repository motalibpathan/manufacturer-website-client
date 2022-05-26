import React from "react";

const Blogs = () => {
  return (
    <div className="md:container mx-auto p-5 min-h-screen">
      <h1 className="my-3 font-bold text-xl">Blogs</h1>
      <h2 className="my-3 font-bold text-xl">
        14.1 How will you improve the performance of a React Application?
      </h2>
      <p>
        Answer:
        <ol>
          <li>
            1. Try to keep local state in local component instead of parents
            component
          </li>
          <li>
            2. Memories React components to prevent unnecessary re-renders.
          </li>
          <li>3. For improve app loading time we can use lazy loading image</li>
          <li>
            4. Code-splitting in React to make different component and using
            import(){" "}
          </li>
          <li>5. Update component only when necessary and required</li>
        </ol>{" "}
      </p>
      <h2 className="my-3 font-bold text-xl">
        14.2 What are the different ways to manage a state in a React
        application?
      </h2>
      <p>
        Answer: There are four types of state have to manage properly.{" "}
        <span className="font-bold">Local state: </span>
        We declare local state by useState() hook. Local state manage data one
        or another component.
        <span className="font-bold"> Global state </span> Global state is state
        that we manage state in multiple components. Global state is necessary
        to get and change data from multiple component.
        <span className="font-bold"> Server state </span>
        This state data comes from an external server. We can manage server
        state using React Query it is much easier to managing.
        <span className="font-bold"> URL state </span>
        URL state is data which contains in url. By this url we will show
        different component or page in ui.
      </p>
      <h2 className="my-3 font-bold text-xl">
        14.3 How does prototypical inheritance work?
      </h2>
      <p>
        Answer: Prototypical inheritance is a feature of javascript. It is used
        to add method in object. By prototypical inheritance feature we can add
        a method from one to another object. It is allow to inheritance a method
        to another object method.{" "}
      </p>

      <h2 className="my-3 font-bold text-xl">
        14.4 Why you do not set the state directly in React. For example, if you
        have const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>
      <p>
        Answer: If we do products = [...] then react will not show the change in
        ui because react can not understand this. React will understand when
        setProducts function is called. After setProducts function call react
        will re-render the component and show updated value in ui
      </p>

      <h2 className="my-3 font-bold text-xl">
        14.5 You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h2>

      <p>
        Answer:
        <br />
        <div className="bg-gray-100 p-2">
          <span>
            {`const searchTerm = "iphone";
            const result = products.filter((product) => {
              const name = product.name.toLowerCase();
              const res = name.includes(searchTerm.toLowerCase());
              return res;
            });
            console.log(result);`}
          </span>
        </div>
      </p>

      <h2 className="my-3 font-bold text-xl">
        14.6 What is a unit test? Why should write unit tests?
      </h2>
      <p>
        Answer: Unit test is a type of software test. In unit text where test
        component individually. The purpose of unit test is to ensure the
        expectation of code performance. It is isolate a section of code and
        verify its correctness. Because if any problem or bugs in this system
        then after unit testing it will be identify in early state and then the
        cost of bugs fixes is significantly reduced.{" "}
      </p>
    </div>
  );
};

export default Blogs;
