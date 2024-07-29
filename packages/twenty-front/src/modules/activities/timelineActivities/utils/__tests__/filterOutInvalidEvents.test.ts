import { TimelineActivity } from '@/activities/timelineActivities/types/TimelineActivity';
import { filterOutInvalidEvents } from '@/activities/timelineActivities/utils/filterOutInvalidEvents';
import { ObjectMetadataItem } from '@/object-metadata/types/ObjectMetadataItem';

describe('filterOutInvalidEvents', () => {
  it('should filter out events with deleted fields from the properties diff', () => {
    const events = [
      {
        id: '1',
        properties: {
          diff: {
            field1: { before: 'value1', after: 'value2' },
            field2: { before: 'value3', after: 'value4' },
            field3: { before: 'value5', after: 'value6' },
          },
        },
      },
      {
        id: '2',
        properties: {
          diff: {
            field1: { before: 'value7', after: 'value8' },
            field2: { before: 'value9', after: 'value10' },
            field4: { before: 'value11', after: 'value12' },
          },
        },
      },
    ] as TimelineActivity[];

    const mainObjectMetadataItem = {
      fields: [{ name: 'field1' }, { name: 'field2' }, { name: 'field3' }],
    } as ObjectMetadataItem;

    const filteredEvents = filterOutInvalidEvents(
      events,
      mainObjectMetadataItem,
    );

    expect(filteredEvents).toEqual([
      {
        id: '1',
        properties: {
          diff: {
            field1: { before: 'value1', after: 'value2' },
            field2: { before: 'value3', after: 'value4' },
            field3: { before: 'value5', after: 'value6' },
          },
        },
      },
      {
        id: '2',
        properties: {
          diff: {
            field1: { before: 'value7', after: 'value8' },
            field2: { before: 'value9', after: 'value10' },
          },
        },
      },
    ]);
  });

  it('should return an empty array if all events have deleted fields in the properties diff', () => {
    const events = [
      {
        id: '1',
        properties: {
          diff: {
            field3: { before: 'value5', after: 'value6' },
          },
        },
      },
      {
        id: '2',
        properties: {
          diff: {
            field4: { before: 'value11', after: 'value12' },
          },
        },
      },
    ] as TimelineActivity[];

    const mainObjectMetadataItem = {
      fields: [{ name: 'field1' }, { name: 'field2' }],
    } as ObjectMetadataItem;

    const filteredEvents = filterOutInvalidEvents(
      events,
      mainObjectMetadataItem,
    );

    expect(filteredEvents).toEqual([]);
  });

  it('should return the same events if there are no properties diffs', () => {
    const events = [
      {
        id: '1',
        properties: {},
      },
      {
        id: '2',
        properties: {},
      },
    ] as TimelineActivity[];

    const mainObjectMetadataItem = {
      fields: [{ name: 'field1' }, { name: 'field2' }],
    } as ObjectMetadataItem;

    const filteredEvents = filterOutInvalidEvents(
      events,
      mainObjectMetadataItem,
    );

    expect(filteredEvents).toEqual(events);
  });
});
