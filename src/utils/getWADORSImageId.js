function getWADORSImageUrl(instance, frame) {
  let wadorsuri = instance.wadorsuri;

  if (!wadorsuri) {
    return;
  }

  // We need to sum 1 because WADO-RS frame number is 1-based
  frame = (frame || 0) + 1;

  // Replaces /frame/1 by /frame/{frame}
  wadorsuri = wadorsuri.replace(/frames\/(\d+)/, `frames/${frame}`);

  return wadorsuri;
}

/**
 * Obtain an imageId for Cornerstone based on the WADO-RS scheme
 *
 * @param {object} instanceMetada metadata object (InstanceMetadata)
 * @returns {string} The imageId to be used by Cornerstone
 */
export default function getWADORSImageId(instance, frame) {
  const uri = getWADORSImageUrl(instance, frame);

  if (!uri) {
    return;
  }

  return `wadors:${uri}`;
}
