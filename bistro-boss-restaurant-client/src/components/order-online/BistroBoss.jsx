import { Button } from "../ui/button";

const BistroBoss = () => {
    return (
        <section className="py-32 px-32 bg-[url('./assets/home/chef-service.jpg')] bg-cover">
            <div className="backdrop-blur-md container gap-5 mx-auto flex flex-col items-center px-32 py-16 text-center   ">
                <h1 className="text-4xl font-bold leadi sm:text-5xl">
                    Bistro Boss
                </h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur ducimus mollitia atque placeat explicabo fuga velit
                    ab. Et, a dolor?
                </p>
                <div className="flex flex-wrap gap-8 justify-center">
                    <Button variant="" className="">
                        Get started
                    </Button>
                    <Button variant="outline" className="">
                        Learn more
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BistroBoss;
