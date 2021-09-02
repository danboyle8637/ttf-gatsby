import * as React from "react";
import { BlogH3 } from "./BlogH3";
import { BlogH4 } from "./BlogH4";
import { BulletList } from "./BulletList";
import { BulletListItem } from "./BulletListItem";
import { PostImage } from "./PostImage";
import { InternalLink } from "./InternalLink";
import { ExternalLink } from "./ExternalLink";

export const blockContentSerializer = {
  types: {
    //@ts-ignore
    block: (props) => {
      switch (props.node.style) {
        case "normal": {
          //@ts-ignore
          return <p>{props.children}</p>;
        }
        case "h3": {
          //@ts-ignore
          return <BlogH3>{props.children}</BlogH3>;
        }
        case "h4": {
          //@ts-ignore
          return <BlogH4>{props.children}</BlogH4>;
        }
        default: {
          //@ts-ignore
          return <p>{props.children}</p>;
        }
      }
    },
    //@ts-ignore
    postImage: (props) => {
      const image = props.node.mainImage.asset._ref;
      const altTag = props.imageAltTag;
      const titleTag = props.imageTitle;
      //@ts-ignore
      return <PostImage image={image} altTag={altTag} titleTag={titleTag} />;
    },
  },
  //@ts-ignore
  list: (props) => {
    switch (props.type) {
      case "number": {
        //@ts-ignore
        return <ol>{props.children}</ol>;
      }
      case "blueBullet": {
        //@ts-ignore
        return <BulletListSolo>{props.children}</BulletListSolo>;
      }
      default: {
        //@ts-ignore
        return <BulletList>{props.children}</BulletList>;
      }
    }
  },
  //@ts-ignore
  listItem: (props) => {
    switch (props.node.listItem) {
      case "number": {
        //@ts-ignore
        return <OrderedListItem>{props.children}</OrderedListItem>;
      }
      case "blueBullet": {
        return (
          //@ts-ignore
          <BulletListItem color="#5AFDF2">{props.children}</BulletListItem>
        );
      }
      default: {
        //@ts-ignore
        return <BulletListItem>{props.children}</BulletListItem>;
      }
    }
  },
  marks: {
    //@ts-ignore
    strong: (props) => {
      //@ts-ignore
      return <strong>{props.children}</strong>;
    },
    //@ts-ignore
    internalPostLink: (props) => {
      const { slug = {} } = props.mark;
      const url = `/post/${slug.current}`;
      //@ts-ignore
      return <InternalLink url={url}>{props.children}</InternalLink>;
    },
    //@ts-ignore
    internalPageLink: (props) => {
      const url = props.mark.pageUrl;
      //@ts-ignore
      return <InternalLink url={url}>{props.children}</InternalLink>;
    },
    //@ts-ignore
    externalLink: (props) => {
      return (
        //@ts-ignore
        <ExternalLink url={props.mark.externalUrl}>
          {props.children}
        </ExternalLink>
      );
    },
  },
};
