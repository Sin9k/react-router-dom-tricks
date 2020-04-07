import usePrepareLink from "~/hooks/router/usePrepareLink";

export default linkData => {
  return usePrepareLink({
    ...linkData,
    state: {
      hasPrevRoute: true
    }
  });
};
