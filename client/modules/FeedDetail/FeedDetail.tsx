import { FC } from "react";

import { useGetComments } from "../../api/hooks";

import { Grid, Section } from "../../components/Grid";
import { SlideComments } from "../../components/SlideComments";
import { SlidePresentation } from "../../components/SlidePresentation";

import { FeedDetailProps } from "./types";

export const FeedDetail: FC<FeedDetailProps> = ({ feed }) => {
  const { data, isLoading } = useGetComments(feed.id);

  return (
    <article style={{ height: "100%" }}>
      <Grid style={{ height: "100%" }}>
        <Section size={8} style={{ height: "100%" }}>
          <SlidePresentation feed={feed} />
        </Section>
        <Section size={4} style={{ height: "100%" }}>
          <SlideComments
            authorLogo={feed.brand.logo}
            authorTitle={feed.brand.name}
            authorPostedDate={feed.startsOn}
            comments={data}
            isLoading={isLoading}
            title={feed.feedTitle}
          />
        </Section>
      </Grid>
    </article>
  );
};
