import refetchListIfNeeded from '../refetchListIfNeeded';

describe('refetchListIfNeeded.', () => {
  describe('needRefetch=false', () => {
    const params = {
      needRefetch: false,
      refetchFunc: jest.fn()
    };
    const { refetchFunc } = params;
    refetchListIfNeeded(params);

    it('and have not called refetchFunc()', () => {
      expect(refetchFunc).not.toHaveBeenCalled();
    });
  });

  describe('needRefetch=true', () => {
    const params = {
      needRefetch: true,
      totalItems: 38,
      currentPage: 2,
      dispatch: jest.fn(),
      refetchFunc: jest.fn()
    };
    const { refetchFunc, currentPage } = params;
    refetchListIfNeeded(params);

    it('and refetchFunc() called with current page', () => {
      expect(refetchFunc).toHaveBeenCalledWith(currentPage);
    });
  });

  describe('needRefetch=true', () => {
    const params = {
      needRefetch: true,
      totalItems: 21,
      currentPage: 2,
      dispatch: jest.fn(),
      refetchFunc: jest.fn()
    };
    const { refetchFunc, currentPage } = params;
    const previousPage = currentPage - 1;
    refetchListIfNeeded(params);

    it('and refetchFunc() called with previous page', () => {
      expect(refetchFunc).toHaveBeenCalledWith(previousPage);
    });
  });
});
