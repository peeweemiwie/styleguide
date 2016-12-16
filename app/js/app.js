// Define the `phonecatApp` module
var styleguideApp = angular.module('styleguide', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
styleguideApp.controller('styleguideController', function styleguideController($scope) {

  $scope.links = [
    {
      name: 'color',
      url: 'color'
    },{
      name: 'typography',
      url: 'typography'
    },{
      name: 'button',
      url: 'button'
    }
  ];
 $scope.colors = [
    {
      comment: 'Remove unused before pull request.',
      colorDetails: [
        {
          colorHex: '526269',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'gunmetal'
        },{
          colorHex: 'f5f8fa',
          colorRGBA: '(245, 248, 250, 1)',
          colorVar: 'pale-grey'
        }
      ]
    },{
      comment: 'Color reference (need renaming)',
      colorDetails: [
        {
          colorHex: '17658A',
          colorRGBA: '(23, 101, 138, 1)',
          colorVar: 'cota-blue'
        },{
          colorHex: 'D4DBE3',
          colorRGBA: '(212, 219, 227, 1)',
          colorVar: 'body-fill'
        },{
          colorHex: 'F0F2F3',
          colorRGBA: '(240, 242, 243, 1)',
          colorVar: 'fill-gray'
        }
      ]
    },{
      comment: 'Color reference',
      colorDetails: [
        {
          colorHex: '31ADE3',
          colorRGBA: '(49, 173, 227, 1)',
          colorVar: 'blue'
        },{
          colorHex: '31ade3',
          colorRGBA: '(0, 93, 134, 1)',
          colorVar: 'dark-sky-blue'
        },{
          colorHex: '005d86',
          colorRGBA: '(0, 93, 134, 1)',
          colorVar: 'deep-sea-blue'
        },{
          colorHex: '004463',
          colorRGBA: '(49, 173, 227, 1)',
          colorVar: 'marine-blue'
        },{
          colorHex: '002332',
          colorRGBA: '(0, 35, 50, 1)',
          colorVar: 'navy'
        },{
          colorHex: '43B649',
          colorRGBA: '(67, 182, 73, 1)',
          colorVar: 'green'
        },{
          colorHex: 'E6BA25',
          colorRGBA: '(230, 186, 37, 1)',
          colorVar: 'yellow'
        },{
          colorHex: 'D93646',
          colorRGBA: '(217, 54, 70, 1)',
          colorVar: 'red'
        },{
          colorHex: 'F2E7E8',
          colorRGBA: '(242, 231, 232, 1)',
          colorVar: 'light-red'
        },{
          colorHex: 'B936D4',
          colorRGBA: '(185, 54, 212, 1)',
          colorVar: 'purple'
        },{
          colorHex: 'fff',
          colorRGBA: '(255, 255, 255, 1)',
          colorVar: 'white'
        },{
          colorHex: 'ccc',
          colorRGBA: '(204, 204, 204, 1)',
          colorVar: 'pinkish-gray'
        },{
          colorHex: '999',
          colorRGBA: '(153, 153, 153, 1)',
          colorVar: 'warm-gray'
        },{
          colorHex: '666',
          colorRGBA: '(102, 102, 102, 1)',
          colorVar: 'light-gray'
        },{
          colorHex: '333',
          colorRGBA: '(51, 51, 51, 1)',
          colorVar: 'gray'
        },{
          colorHex: '1F2835',
          colorRGBA: '(31, 40, 53, 1)',
          colorVar: 'black'
        }
      ]
    },{
      comment: 'Text colors (need renaming)',
      colorDetails: [
        {
          colorHex: '5C7179',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'modal-text'
        },{
          colorHex: '8E9A9F',
          colorRGBA: '(245, 248, 250, 1)',
          colorVar: 'text-gray'
        },{
          colorHex: '737C80',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'text-gray-two'
        },{
          colorHex: '646C70',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'text-gray-three'
        },{
          colorHex: '6F848C',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'content-header-gray'
        },{
          colorHex: 'D0D9DD',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'disabled-text-gray'
        }
      ]
    },{
      comment: 'grays',
      colorDetails: [
        {
          colorHex: '5C7179',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'modal-text'
        },{
          colorHex: '8E9A9F',
          colorRGBA: '(245, 248, 250, 1)',
          colorVar: 'text-gray'
        },{
          colorHex: '737C80',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'text-gray-two'
        },{
          colorHex: '646C70',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'text-gray-three'
        },{
          colorHex: '6F848C',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'content-header-gray'
        },{
          colorHex: 'D0D9DD',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'disabled-text-gray'
        },{
          colorHex: '526269',
          colorRGBA: '(82, 98, 105, 1)',
          colorVar: 'gunmetal'
        },{
          colorHex: 'f5f8fa',
          colorRGBA: '(245, 248, 250, 1)',
          colorVar: 'pale-grey'
        },{
          colorHex: 'D4DBE3',
          colorRGBA: '(212, 219, 227, 1)',
          colorVar: 'body-fill'
        },{
          colorHex: 'F0F2F3',
          colorRGBA: '(240, 242, 243, 1)',
          colorVar: 'fill-gray'
        },{
          colorHex: 'ccc',
          colorRGBA: '(204, 204, 204, 1)',
          colorVar: 'pinkish-gray'
        },{
          colorHex: '999',
          colorRGBA: '(153, 153, 153, 1)',
          colorVar: 'warm-gray'
        },{
          colorHex: '666',
          colorRGBA: '(102, 102, 102, 1)',
          colorVar: 'light-gray'
        },{
          colorHex: '333',
          colorRGBA: '(51, 51, 51, 1)',
          colorVar: 'gray'
        }

      ]
    }
  ];
});
