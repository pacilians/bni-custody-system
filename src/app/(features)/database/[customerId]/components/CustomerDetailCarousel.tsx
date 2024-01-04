"use client";

// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// libs
import dayjs from "dayjs";

export default function CustomerDetailCarousel(customer: any) {
  customer = customer.customer;
  console.log(customer);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-96 grow"
    >
      <CarouselContent className="-ml-2">
        <CarouselItem className="flex-none basis-1/2 pl-2">
          <div className="relative flex h-full flex-col rounded bg-white p-4 dark:bg-gray-800">
            <h1 className="text-2xl font-semibold text-gray-500">Key person</h1>
            <div className="flex w-full grow items-center justify-center p-10">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 p-5 shadow-2xl dark:from-gray-800 dark:to-gray-700">
                <h1 className="mb-5 text-2xl font-semibold">
                  {customer.key_person_name}
                </h1>
                <div className="flex items-center gap-3">
                  <p className="w-20 text-gray-400 dark:text-gray-600">
                    Telephone:
                  </p>
                  <p className="truncate text-gray-600 dark:text-gray-400">
                    {customer.key_person_hp}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="w-20 text-gray-400 dark:text-gray-600">
                    Birthday:
                  </p>
                  <p className="truncate text-gray-600 dark:text-gray-400">
                    {dayjs(customer.key_person_dob as string).format("DD MMMM")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="flex-none basis-1/2 pl-2">
          <div className="relative flex flex-col rounded bg-white p-4 dark:bg-gray-800">
            <h1 className="text-2xl font-semibold text-gray-500">
              Board of directors
            </h1>
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              className=""
            >
              <CarouselContent>
                {customer.board_of_director.map((director: any) => (
                  <CarouselItem key={director.id} className="p-10">
                    <div className="aspect-video rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 p-5 shadow-2xl dark:from-gray-800 dark:to-gray-700">
                      <h1 className="mb-5 text-2xl font-semibold">
                        {director.name}
                      </h1>
                      <div className="flex items-center gap-3">
                        <p className="w-24 text-gray-400 dark:text-gray-600">
                          Role:
                        </p>
                        <p className="truncate text-gray-600 dark:text-gray-400">
                          {director.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="w-24 text-gray-400 dark:text-gray-600">
                          Birthday:
                        </p>
                        <p className="truncate text-gray-600 dark:text-gray-400">
                          {dayjs(director.birth_date as string).format(
                            "DD MMMM",
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="w-24 text-gray-400 dark:text-gray-600">
                          Description:
                        </p>
                        <p className="truncate text-gray-600 dark:text-gray-400">
                          {director.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-top-9 left-auto right-9 translate-y-0" />
              <CarouselNext className="-top-9 right-0 translate-y-0" />
            </Carousel>
          </div>
        </CarouselItem>
        <CarouselItem className="flex-none basis-1/2 pl-2">
          <div className="relative flex flex-col rounded bg-white p-4 dark:bg-gray-800">
            <h1 className="text-2xl font-semibold text-gray-500">
              Bank accounts
            </h1>
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              className=""
            >
              <CarouselContent>
                {customer.bank_account.map((account: any) => (
                  <CarouselItem key={account.id} className="p-10">
                    <div className="aspect-video rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 p-5 shadow-2xl dark:from-gray-800 dark:to-gray-700">
                      <h1 className="mb-5 text-2xl font-semibold">
                        {account.number}
                      </h1>
                      <p className="truncate text-gray-600 dark:text-gray-400">
                        {account.name}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-top-9 left-auto right-9 translate-y-0" />
              <CarouselNext className="-top-9 right-0 translate-y-0" />
            </Carousel>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bottom-3 left-3 top-auto translate-y-0" />
      <CarouselNext className="bottom-3 right-3 top-auto translate-y-0" />
    </Carousel>
  );
}
