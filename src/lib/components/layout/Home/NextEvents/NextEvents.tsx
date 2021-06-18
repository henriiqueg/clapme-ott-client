import { FaRegSadTear } from 'react-icons/fa';
import { Box } from '@chakra-ui/layout';

import { EventI } from 'lib/types/api/events';

import EventCard from '@organism/EventCard';

type Props = {
  nextEvents: EventI[];
};

function NextEvents({ nextEvents }: Props) {
  return (
    <section className="p-8 flex flex-col items-start max-w-screen-xl mx-auto">
      <h2 className="mb-12">Próximos eventos</h2>
      <section className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 w-full items-stretch">
        {nextEvents.length ? (
          nextEvents?.map((event) => (
            <div
              key={event.id}
              className="w-full flex items-center justify-center"
            >
              <EventCard
                products={event.products}
                title={event.title}
                description={event.description}
                date={event.premiere_date}
                id={event.id}
                imgUrl={event.banner || event.og_url}
                artists={event.artists}
              />
            </div>
          ))
        ) : (
          <Box
            w="100%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            className="shadow"
            d="flex"
            flexDirection="column"
          >
            <Box
              p="6"
              d="flex"
              flexDirection="column"
              height="100%"
              flex="1"
              justifyContent="space-between"
            >
              <Box
                mt="2"
                fontWeight="semibold"
                as="h4"
                fontSize="xl"
                lineHeight="tight"
                d="flex"
                alignItems="flex-start"
              >
                <FaRegSadTear className="mr-3 mt-1" fontSize={30} />
                Ainda não existem próximos eventos
              </Box>
            </Box>
          </Box>
        )}
      </section>
    </section>
  );
}

export default NextEvents;
