/**
 * build目录是最终的成品。
 * _build_content目录和_build_background目录只是过程产物，
 * 它俩在build结束后，会合并到build目录中，
 * 然后自动删除_build_content目录和_build_background目录。
 */

// Chrome Extension 最终build目录
export const CRX_OUTDIR = 'build'
// 临时build content script的目录
export const CRX_CONTENT_OUTDIR = '_build_content'
// 临时build background script的目录
export const CRX_BACKGROUND_OUTDIR = '_build_background'
