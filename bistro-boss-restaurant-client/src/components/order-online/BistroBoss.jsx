import { Button } from "../ui/button";

const BistroBoss = () => {
    return (
        <section className="py-4 px-4 sm:py-8 sm:px-8 md:py-32 md:px-32 bg-[url('./assets/home/chef-service.jpg')] bg-cover bg-center">
            <div className="bg-background/75 container gap-5 flex flex-col items-center py-8 px-8 md:px-32 md:py-16 text-center">
                <h1 className="text-4xl font-bold sm:text-5xl">Bistro Boss</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur ducimus mollitia atque placeat explicabo fuga velit
                    ab. Et, a dolor?
                </p>
                <div className="flex gap-8 justify-center">
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
