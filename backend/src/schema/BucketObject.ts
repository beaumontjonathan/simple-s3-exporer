import { BucketObjectResolvers } from '../generated/graphql';

export const BucketObject: BucketObjectResolvers = {
  key: ({ key }) => key,
  lastModified: ({ lastModified }) => lastModified,
  etag: ({ etag }) => etag,
  size: ({ size }) => size,
  storageClass: ({ storageClass }) => storageClass,
};
